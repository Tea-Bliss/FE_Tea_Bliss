'use client';

import { useEffect, useRef } from 'react';

import { Chart, ChartData, ChartOptions } from 'chart.js/auto';
import classNames from 'classnames/bind';

import Loader from '@/components/common/Loader';
import styles from '@/components/page-layout/adminLayout/components/AdminHomePage/Graph/Graph.module.scss';
import useGAReport from '@/components/page-layout/adminLayout/hooks/useGAReport';
import formatDateString from '@/components/page-layout/adminLayout/utils/formatDataString';

const cn = classNames.bind(styles);

export default function Graph() {
  const pageViewRef = useRef<HTMLCanvasElement>(null);
  const activeUserRef = useRef<HTMLCanvasElement>(null);
  const pageViewChartInstanceRef = useRef<Chart | null>(null);
  const activeUserChartInstanceRef = useRef<Chart | null>(null);

  const { data: graphData, isLoading } = useGAReport();

  useEffect(() => {
    if (!graphData) return;

    if (pageViewRef.current && activeUserRef.current) {
      const ctxPageView = pageViewRef.current.getContext('2d');
      const ctxActiveUser = activeUserRef.current.getContext('2d');

      if (ctxPageView && ctxActiveUser) {
        const labels = graphData.rows.map((row) => formatDateString(row.dimensionValues[0].value));
        const activeUsers = graphData.rows.map((row) => parseInt(row.metricValues[0].value, 10));
        const screenPageViews = graphData.rows.map((row) => parseInt(row.metricValues[1].value, 10));

        const pageViewChartData: ChartData<'line'> = {
          labels,
          datasets: [
            {
              label: '페이지 뷰',
              data: screenPageViews,
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              fill: true,
            },
          ],
        };

        const activeUserChartData: ChartData<'line'> = {
          labels,
          datasets: [
            {
              label: '방문자',
              data: activeUsers,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        };

        const chartOptions: ChartOptions<'line'> = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Count',
              },
            },
          },
        };

        if (pageViewChartInstanceRef.current) {
          pageViewChartInstanceRef.current.destroy();
        }

        pageViewChartInstanceRef.current = new Chart(ctxPageView, {
          type: 'line',
          data: pageViewChartData,
          options: chartOptions,
        });

        if (activeUserChartInstanceRef.current) {
          activeUserChartInstanceRef.current.destroy();
        }

        activeUserChartInstanceRef.current = new Chart(ctxActiveUser, {
          type: 'line',
          data: activeUserChartData,
          options: chartOptions,
        });
      }
    }

    return () => {
      if (pageViewChartInstanceRef.current) {
        pageViewChartInstanceRef.current.destroy();
      }

      if (activeUserChartInstanceRef.current) {
        activeUserChartInstanceRef.current.destroy();
      }
    };
  }, [graphData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {' '}
          <div className={cn('container')}>
            <canvas ref={pageViewRef} className={cn('graph')}></canvas>
          </div>
          <div className={cn('container')}>
            <canvas ref={activeUserRef} className={cn('graph')}></canvas>
          </div>
        </>
      )}
    </>
  );
}
