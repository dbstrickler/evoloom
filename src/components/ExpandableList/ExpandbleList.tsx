import { FlatList, View } from 'react-native';
import Tile from '../Tasks/TaskTile';
import type { MainTask } from '../types';

const ExpandableList = ({ data }: { data: MainTask[] }) => {
    const renderItem = ({ item }: { item: MainTask }) => <Tile item={item} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.Id.toString()}
            ListFooterComponent={<View style={{ height: 40 }} />}
            style={{ padding: 20 }}
        />
    );
};

export default ExpandableList;
