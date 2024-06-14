'use client';

import { useEffect, useRef, useState } from 'react';

import { Chart, ChartData, ChartOptions } from 'chart.js/auto';
import classNames from 'classnames/bind';

import styles from '@/components/page-layout/adminLayout/components/AdminHomePage/Graph/Graph.module.scss';
import GAReport from '@/components/page-layout/adminLayout/hooks/useGAReport';
import { GraphData } from '@/components/page-layout/adminLayout/types/graphData';
import formatDateString from '@/components/page-layout/adminLayout/utils/formatDataString';

const cn = classNames.bind(styles);

export default function Graph() {
  const [graphData, setGraphData] = useState<GraphData>();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const fetchGAReport = async () => {
    const result = await GAReport();

    setGraphData(result);
  };

  useEffect(() => {
    fetchGAReport();
  }, []);

  useEffect(() => {
    if (!graphData) return;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        const labels = graphData.rows.map((row) => formatDateString(row.dimensionValues[0].value));
        const activeUsers = graphData.rows.map((row) => parseInt(row.metricValues[0].value, 10));
        const screenPageViews = graphData.rows.map((row) => parseInt(row.metricValues[1].value, 10));
        const sessions = graphData.rows.map((row) => parseInt(row.metricValues[2].value, 10));

        const chartData: ChartData<'line'> = {
          labels,
          datasets: [
            {
              label: '방문자',
              data: activeUsers,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
            {
              label: '페이지 뷰',
              data: screenPageViews,
              borderColor: 'rgba(153, 102, 255, 1)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              fill: true,
            },
            {
              label: '세션 수',
              data: sessions,
              borderColor: 'rgba(255, 159, 64, 1)',
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
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

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: chartOptions,
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [graphData]);

  return (
    <div className={cn('container')}>
      <canvas ref={chartRef} className={cn('graph')}></canvas>
    </div>
  );
}
