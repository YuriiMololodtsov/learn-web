import LessonTile from '../../components/LessonTile/LessonTile';
import { supabase } from '../../lib/supabaseClient';

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

const HtmlLessonsPage = async () => {
  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('category', 'html');

  if (error) {
    return (
      <div>
        <h1>Произошла ошибка при загрузке уроков</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>HTML Уроки</h1>
      <div>
        {lessons && lessons.length > 0 ? (
          lessons.map((lesson: Lesson) => (
            <LessonTile
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
            />
          ))
        ) : (
          <p>Нет доступных уроков</p>
        )}
      </div>
    </div>
  );
};

export default HtmlLessonsPage;
