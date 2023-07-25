function Footer() {
    return (
        <footer>
            <div className="container flex md:flex-row flex-col py-12 justify-between px-8 md:px-0">

                <div className="md:w-1/3">
                    <p className="text-2xl font-bold">CONSOLDES</p>
                    <p className="mt-4">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                    <div className="flex justify-between mt-4">
                        <p>sosial icon</p>
                        <p>sosial icon</p>
                        <p>sosial icon</p>
                    </div>
                </div>

                <div className="md:w-1/3 mt-10 md:mt-0">
                    <p className="text-xl font-medium">Links</p>
                    <div className="flex flex-col gap-3 mt-3">
                        <p>Blogs</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>

                </div>

            </div>
            <div className="flex justify-center border-t p-5">
                <p>© 2023 Consoldes, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer