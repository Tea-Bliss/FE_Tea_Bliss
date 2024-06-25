import RecommendLayout from '@/components/page-layout/recommendLayout';

export default function Recommend({ searchParams }) {
  return <RecommendLayout surveyId={searchParams.data} />;
}
