import { FlatList, View } from 'react-native';
import Tile from '../Tiles/TaskTile';

const ExpandableList = ({ data }) => {
    const renderItem = ({ item }) => <Tile item={item} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={<View style={{ height: 40 }} />}
            style={{ padding: 20 }}
        />
    );
};

export default ExpandableList;
