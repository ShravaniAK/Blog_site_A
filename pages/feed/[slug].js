import Head from 'next/head'
import { useRouter } from "next/router"
import { Toolbar } from "../../components/toolbar"

export const Feed = ({ pageNumber, articles }) => {
    const router = useRouter()

    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Toolbar />

            <div className="container my-auto mx-auto p-4 ">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded shadow-md mb-4 cursor-pointer rounded-xl">
                        <div className="aspect-w-1 aspect-h-1">
                            <div className="flex items-center justify-center">
                                {!!article.urlToImage && (
                                    <img src={article.urlToImage} className="w-64 h-64 my-5 object-cover rounded-xl" alt="Article Thumbnail" />
                                )}
                            </div>
                        </div>
                        <div className="p-4">
                            <h1 onClick={() => (window.location.href = article.url)} className="text-xl font-semibold text-blue-600 hover:underline">
                                {article.title}
                            </h1>
                            <p className="text-gray-600">
                                {article.description}
                            </p>
                            <p>Written by: {article.author}</p>
                            <p>Published on: {article.publishedAt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        }
    )

    const apiJson = await apiResponse.json()

    const { articles } = apiJson

    return {
        props: {
            articles: articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}

export default Feed
