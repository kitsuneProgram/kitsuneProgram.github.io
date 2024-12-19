import { Metadata } from "next";

export const metadata:Metadata = {
  title: "はじめての方へ | KitsuneProgrammer"
}

export default function Welcome() {
    return (
      <>
        <h1>このブログについて</h1>

        <p>このブログは開発者の狐。がNext.jsとMicroCMSとGitHub Pagesで制作したブログです。<br/><br/>
        
        基本はXやDiscordで活動していることが多く、<br/>
        このブログに記事を書くことは少ないと思います。<br/><br/>
        
        このブログでは主にWebサイトの制作やゲーム開発についての記事を書くつもりです。</p>

        <hr/>

        <h1>私について</h1>

        <p>Next.jsでのWebサイト開発やUnityでのゲーム開発を主にしていて、<br/>
        絵を描いたり、作曲したりもしています。<br/><br/>
        
        東方やUNDERTALE、マリオカート8DX、ピクミン3などのゲームが好きです。<br/>
        東方はこの中で一番好きで菅牧典推し。<br/><br/>
        
        本も好きでライトノベルで言えば魔女の旅々、<br/>
        推理小説で言えばバチスタシリーズ、<br/>
        漫画で言えば東方酔蝶華、東方茨歌仙、まちカドまぞくが好きです。</p>
      </>
    );
  }