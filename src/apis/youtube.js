import axios from 'axios';

const KEY = 'AIzaSyCp-ZMlF72c6LBE55SI1XYVP3-LyM25Sfs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});