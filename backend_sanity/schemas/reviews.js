export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'reviewer',
            title: 'Reviewer',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'imgURL',
            type: 'image',
            optioons: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
    ]
}