import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

interface ParseDescriptionProps {
  description: string;
}

const ParseDescription = ({ description }: ParseDescriptionProps) => {
  const splitDescription = description.split('\n');

  return (
    <View style={styles.container}>
      {splitDescription.map((desc, idx) => {
        if (desc.includes('-')) {
          return (
            <Text style={[styles.line, styles.marginLeft]} key={`${desc}-${idx}`}>
              {desc.replace(/-/g, '• ')}
            </Text>
          );
        }
        return (
          <Text style={styles.line} key={`${desc}-${idx}`}>
            {desc}
          </Text>
        );
      })}
    </View>
  );
};

export default ParseDescription;
