import {View, Text, ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import AnimeItem from '../AnimeItem';
import {ANIME_QUERY} from './query';

// @ts-ignore
const Index = ({page,perPage,search}) => {
  const {data, loading, error} = useQuery(ANIME_QUERY, {
    variables: {search: search,page: page,perPage: perPage},
  });

  if (loading)
    return <ActivityIndicator size={'large'} style={{padding: 20}} />;

  if (error) return <Text>El servidor ha fallado</Text>;

  const parseData = data?.AnimeSearch?.media ? data?.AnimeSearch?.media: [];

  console.log(parseData);
  return (
    <View style={{alignItems: 'center'}}>
      {parseData.map((args:any) => {
        return <AnimeItem anime={args} key={args?.id}/>;
      })}
    </View>
  );
};

export default Index;
