import {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PaginationButtons from '../../components/PaginationButtons';
import ListAnime from '../../components/ListAnime';
import SearchBar from "../../navigation/SearchBar";
import Button from '../../components/Button';
import SpeechNative from "../../components/Speech";

const Index = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [search, setSearch] = useState("SNK");
    const [clicked, setClicked] = useState(false);


    // @ts-ignore
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchBar
                    searchPhrase={search}
                    setSearchPhrase={setSearch}
                    clicked={clicked}
                    setCLicked={setClicked}
                />
                <SpeechNative search={search} />
                <ListAnime page={page} perPage={perPage} search={search}/>
                <PaginationButtons setPage={setPage} page={page} />
                <Button screenName={'Favorites'} text={'Go to favorites'}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
