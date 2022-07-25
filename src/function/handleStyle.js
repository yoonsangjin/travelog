export default function handleStyle(data) {
    if (data.category_group_code == 'AT4') {
        return { border: '2px solid rgb(3, 155, 0)' };
    } else if (data.category_group_code == 'FD6') {
        return { border: '2px solid rgb(0, 41, 254)' };
    } else if (data.category_group_code == 'CE7') {
        return { border: '2px solid rgb(224, 88, 54)' };
    } else if (data.category_group_code == '') {
        return { border: '2px solid #d9d9d9' };
    }
}