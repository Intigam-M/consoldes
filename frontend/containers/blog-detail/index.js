import PostDetail from '@/components/blogPage/postDetail'
import RecentPost from '@/components/blogPage/recentPost'

function BlogDetailContainer() {
  return (
    <div>
    <div className='container flex justify-between py-12 md:flex-row flex-col'>
        <div className='bg-green-500 md:w-8/12 grid px-8 md:px-0'>
            <PostDetail />
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

export default BlogDetailContainer