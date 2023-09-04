import data from '../data/data.json';

const requestData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export default requestData;