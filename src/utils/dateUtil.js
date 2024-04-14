export const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });

    const formattedTime = date.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return `${formattedDate} ${formattedTime}`;
};
