export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    field: [{
        name: 'caption',
        title: 'Caption',
        type: 'string',
    },
    {
        name: 'video',
        title: 'Video',
        type: 'file',
        options: {
            hotspot: true,
        },
    },
    {
        name: 'userId',
        title: 'UserId',
        type: 'string',
    },
    {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
    },
    {
        name: 'liked',
        title: 'Likes',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [{ type: 'user' }],
            },
        ]
    },
    {
        name: 'comments',
        title: 'Comments',
        type: 'array',
        of: [{ type: 'comment' }],
    },
    ],
};