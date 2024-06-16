import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { GraphDataType } from '@/components/page-layout/adminLayout/types/graphDataType';

export default function useGAReport() {
  return useQuery({
    queryKey: ['admin', 'GAReport'],
    queryFn: () => GAReport(),
  });
}

async function GAReport() {
  const accessTokenRespoense = await axios.post('https://accounts.google.com/o/oauth2/token', {
    client_id: `${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`,
    client_secret: `${process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET}`,
    refresh_token: `${process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN}`,
    grant_type: 'refresh_token',
  });

  const GAReportResponse = await axios.post(
    `https://analyticsdata.googleapis.com/v1beta/properties/${process.env.NEXT_PUBLIC_GA4_PROPERTY_ID}:runReport`,

    {
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }, { name: 'sessions' }],
      dateRanges: [{ startDate: '2024-06-10', endDate: 'today' }],
      keepEmptyRows: true,
    },

    {
      headers: {
        Authorization: `Bearer ${accessTokenRespoense.data.access_token}`,
      },
    }
  );

  return GAReportResponse.data as GraphDataType;
}
