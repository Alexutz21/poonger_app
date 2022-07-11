import { title } from "process";

export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'userTitle',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
        }
    ]
}