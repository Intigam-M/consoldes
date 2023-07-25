import Post from '@/components/blogPage/post'
import RecentPost from '@/components/blogPage/recentPost'

function BlogContainer() {
    return (
        <div>
            <div className='container flex justify-between py-12 md:flex-row flex-col'>
                <div className='bg-green-500 md:w-8/12 grid md:grid-cols-2 gap-8 px-8 md:px-0'>
                    <Post />
                    <Post />
                </div>
                <div className='bg-orange-400 md:w-4/12 px-8 md:px-0 flex flex-col gap-10'>
                    <h1 className='text-2xl font-bold pl-8'>Recent Posts</h1>
                    <RecentPost /> 
                    <RecentPost /> 
                    <RecentPost /> 
                </div>
            </div>
        </div>
    )
}

export default BlogContainer