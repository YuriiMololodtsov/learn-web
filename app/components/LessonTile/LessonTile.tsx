import Link from 'next/link';
import styles from './LessonTile.module.scss';

interface LessonTileProps {
  id: string;
  title: string;
  description: string;
}

const LessonTile: React.FC<LessonTileProps> = ({ id, title, description }) => {
  return (
    <div className={styles.tile}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={`/lessons/${id}`}>
        Перейти к уроку
      </Link>
    </div>
  );
};

export default LessonTile;

