import Image from 'next/image'
import Header from '../Header'

export default function Workspace() {
  const thingsOnDesk = [
    { name: "BenQ GW2790QT 27\"", link: "https://www.benq.com/en-in/monitor/home/gw2790qt.html" },
    { name: "M1 Macbook Pro 13\"", link: "https://www.apple.com/in/macbook-pro/" },
    { name: "Logitech K380 Keyboard", link: "https://www.amazon.in/gp/product/B0148NPH9I/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" },
    { name: "Magic Trackpad", link: "https://www.apple.com/in/shop/product/MK2D3ZM/A/magic-trackpad-white-multi-touch-surface?fnode=45f1b663db61f572196e7f3037d1b01aaf76526708bff790522bdb0d4df39cb29992d55d04c9cae37c4c5118eb8fced27e34248c05d0e93c716df7c70324bf043f78ea7293e4f91a02b79b4f90ede2c2b9da3a266ff98e2defb699046082152f" },
    { name: "Airpods Pro 2nd Generation", link: "https://www.apple.com/in/airpods-pro/" },
    { name: "Laptop Stand", link: "https://www.amazon.in/gp/product/B09LCY4M26/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" },
    { name: "Phone Stand", link: "https://www.amazon.in/gp/product/B0762JYGDP/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" },
    { name: "Portronics Lamp", link: "https://www.amazon.in/Portronics-Indicator-Acrylonitrile-Butadiene-Polycarbonate/dp/B08NCW539V/ref=sr_1_4?crid=2R0RDONA1WE8C&dib=eyJ2IjoiMSJ9.FTdXUYp9bpRptB2Xj9XJYfVPdIvyMSSIY5ksAlsg7t8I0BR47CrzVisXSojTPDf23etC8HsxlOrf9_URfe3xr04XDjoUQgbj4ZxKy9s5yh-JjTZUNc4sPvBySZxWhbFQcy-gvZUq-8eHjmWTUKPzXK-1TTCOj7JNdwlIZ9SddBpkWJhJ0P4GaPzspdWyBSGBfRRqkWjZvW29erWz-J6J4TxOLCQCYHJy17vgxxuRf-o.sXRSNW28SxUvR7EROVra2kOJtKj4Lquo3C0tIX8i0_E&dib_tag=se&keywords=portronics+lamp&qid=1725348996&sprefix=portronics+lamp,aps,252&sr=8-4" },
    { name: "Luffy and Shanks Figure", link: "https://www.amazon.in/Blue-Aura-Character-Monkey-Collectible/dp/B08T9TNWJM/ref=sr_1_10?crid=DMJD9SF4SCXA&dib=eyJ2IjoiMSJ9.r_-ZJZSrAMnLrIYWtWgpeIvETOEYpvNpvV2T2PaXbRzeFHXmHJT6So3ePu_TKQ0KUz_jg5kVsRSOQGehYvLNmpQw-SQKvn_cA34G88MObveMBB1wLKuOuoJyohrbe6jvCSkWUqH4pvuQjD5SenZ2lE1K98uLuOt7ZKXwYNDQT8qsy2_PBqFKws5jdACqDvzFu3z7awVsmAQYiSY2mGvsPioFs6aZurvKwc5xlzlK3efAADlY8g7ac8hMxN8YWZgA0CRO-DnSKzti1yNZ9eVX1s99zweoZ98jOiSA9Jsi_0w.B7eFy5z3wnvQ1MPpM2CPCvIGha4TdKvhDeBxspk54xA&dib_tag=se&keywords=luffy+and+shanks+action+figure&qid=1725349128&sprefix=luffy+and+sh,aps,295&sr=8-10" },
  ];

  const tools = [
    {
      category: "General",
      items: [
        { name: "Arc", description: "browser of choice", link: "https://arc.net/" },
        { name: "Figma", description: "for prototypes, slides and all", link: "https://figma.com" },
        { name: "VS Code", description: "soon to be replaced by cursor", link: "https://code.visualstudio.com/" },
        { name: "Notion", description: "Notetaking", link: "https://www.notion.so/" },
        { name: "Raycast", description: "simply the best, loved this one", link: "https://www.raycast.com/" },
        { name: "Cal.com", description: "for scheduling", link: "https://refer.cal.com/iamadvaith" },
        { name: "Loom", description: "for async communication, helps a ton while working remotely", link: "https://www.loom.com/" },
        { name: "Airtable", description: "you know why", link: "https://www.airtable.com/" },
        { name: "Dub.co", description: "url shortner of choice, good analytics", link: "https://dub.co/"},
      ]
    },
    {
      category: "Podcast",
      items: [
        { name: "Riverside", description: "to record podcast", link: "https://riverside.fm/" },
        { name: "Davinci Resolve", description: "to edit my podcast", link: "https://www.blackmagicdesign.com/products/davinciresolve" },
      ]
    },
    {
      category: "Learning",
      items: [
        { name: "Framer", description: "learning just for fun", link: "https://www.framer.com/" },
        { name: "Softr", description: "to implement side project", link: "https://www.softr.io/" },
      ]
    },
    {
      category: "AI Tools",
      items: [
        { name: "Cursor", description: "loving it so far, the code generation is pretty good", link: "https://www.cursor.com/" },
        { name: "Warp", description: "playing around, loving it so far", link: "https://www.warp.dev/" },
        { name: "Perplexity", description: "search engine and for research", link: "https://perplexity.ai/"},
        { name: "ChatGPT", description:"for general ai purpose", link: "https://chatgpt.com/"},
        { name: "Voicenotes", description:"to record thoughts and much more", link: "https://voicenotes.com"}
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-custom-bg text-custom-text">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto p-4 space-y-8">
          <section className="space-y-4">
            <h1 className="text-3xl font-bold">My Workspace</h1>
            <p className="text-muted-foreground">A glimpse into my workspace setup and the tools I use daily.</p>
            <Image
              src="/images/workspace.png"
              alt="Desk setup"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Things on Desk</h2>
            <ul className="list-disc pl-5 space-y-1">
              {thingsOnDesk.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-custom-coral hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Tools</h2>
            {tools.map((category, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{category.category}:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-custom-coral hover:underline">
                        {item.name}
                      </a>
                      {item.description && ` → ${item.description}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
