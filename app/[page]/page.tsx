import Competition from '../competition';
export function generateStaticParams(){return ['challenges','rules','submit','register','login','timeline','results','faq'].map(page=>({page}))}
export default async function Page({params}:{params:Promise<{page:string}>}) {const {page}=await params;return <Competition page={page}/>}
