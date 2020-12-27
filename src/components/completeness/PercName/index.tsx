import './styles.css';

interface PercNameProps {
  percentage: number;
  text: string;
}

export const PercName = ({ percentage, text }: PercNameProps) => {
  return (
    <div className="percContainer">
      <span className="text-s percentageText">{percentage}%</span>
      <span className="text-s text">{text}</span>
    </div>
  );
};
