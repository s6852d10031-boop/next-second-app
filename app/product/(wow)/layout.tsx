// nalayout

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1 className="text-4xl font-bold text-green-500 text-center mt-3">
                SAU Product Sale
            </h1>
            {children}
            <h3 className="text-center mt-3 mb-3">   
                ✅ สินค้าดี มีคุณภาพ อีกแล้วครับท่าน ของเค้าดีจริงๆ 🤩
            </h3>
        </section>
    );
}