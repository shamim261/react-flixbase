import { useEffect } from 'react';

export default function useTitle(title) {
    useEffect(() => {
        document.title = `${title} - FlixBase`;
    }, [title]);

    return null;
}
