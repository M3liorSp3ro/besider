export const truncateText = (text: string) => {
    if (!text) {
        return '';
    }
    if (text.length <= 100) {
        return text;
    }
    return text.substring(0, 100) + '...';
};