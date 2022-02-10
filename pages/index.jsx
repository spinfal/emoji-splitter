import Head from 'next/head'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { Global } from '../components/Global.example'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Head>
        <title>{Global.title}</title>
        <meta name="title" content={Global.title} />
        <meta name="description" content="Split an emoji into its combined emojis and see what most emojis are made of." />
        <meta name="keywords" content="emoji, simple, react.js, next.js, split, clean, information" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Spinfal" />
        <meta property="og:image" content={Global.metaImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={Global.metaImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* bg-stone-200 w-2/3 */}
      <main className='text-center mt-10 p-6 rounded-lg'>
        <h1 className='text-3xl font-semibold mb-2'>{Global.header}</h1>
        <h3 className='text-1xl text-stone-400 font-semibold mb-8'>{Global.subheader}</h3>
        <Picker set='apple' title='Pick an emoji' onSelect={(emoji) => { document.getElementById('result').innerText = [...`${emoji.native}`].join(' '); document.title = `${Global.title} - ${emoji.native}` }} />
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">{Global.dividerText}</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className='flex justify-center'>
          <div className="flex flex-col">
            <p className='text-3xl' id='result'></p>
          </div>
        </div>
      </main>
    </div>
  )
}
