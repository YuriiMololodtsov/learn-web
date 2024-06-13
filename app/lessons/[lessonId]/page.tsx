// app/lessons/[lessonId]/page.tsx
import { supabase } from '../../lib/supabaseClient';

interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
}

const LessonPage = async ({ params }: { params: { lessonId: string } }) => {
  const { lessonId } = params;
  const { data: lesson, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', lessonId)
    .single();

  if (error) {
    return (
      <div>
        <h1>Произошла ошибка при загрузке урока</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!lesson) {
    return <p>Урок не найден</p>;
  }

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
    </div>
  );
};

export async function generateStaticParams() {
  const { data: lessons, error } = await supabase.from('lessons').select('id');

  if (error || !lessons) {
    return [];
  }

  return lessons.map((lesson: { id: number }) => ({
    lessonId: lesson.id.toString(),
  }));
}

export default LessonPage;
