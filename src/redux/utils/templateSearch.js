// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux'
// import axios from 'axios';

// function useTemplateSearch(query, pageNumber) {
//     const templates = useSelector((state) => state.allTemplates.templates);

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     const [template, setTemplate] = useState([]);
//     const [hasMore, setHasMore] = useState(false);

//     useEffect(() => {
//         setLoading(true)
//         setError(false)
//         let cancel
//         axios({
//             method: 'GET',
//             url: 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates',
//             params: { q: query, p: pageNumber },
//             cancelToken: new axios.CancelToken(c => cancel = c)
//         }).then(res => {
//             setTemplate(prevTemplate => {
//                 return [...new Set([...prevTemplate, ...res.data.templates.map(t => t.title)])]
//             })
//             setHasMore(res.data.templates.length > 0)
//             setLoading(false)
//             console.log(res.data)
//         }).catch(e => {
//             if (axios.isCancel(e)) return
//             setError(true)
//         })
//         return () => cancel()
//     }, [query, pageNumber])
//     return { loading, error, template, hasMore };
// }

// export default useTemplateSearch;