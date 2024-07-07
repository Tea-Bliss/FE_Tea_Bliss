import RecommendLayout from '@/components/page-layout/recommendLayout';

interface RecommendProps {
  searchParams: {
    data: string;
    name: string;
  };
}

export default function Recommend({ searchParams }: RecommendProps) {
  return <RecommendLayout surveyId={searchParams.data} />;
}
