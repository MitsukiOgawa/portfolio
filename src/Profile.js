import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Profile extends Component {
   render(){

       const myBirthday = {
           year: 1996,
           month: 2,
           date: 10
       };

       const birthDate = new Date(myBirthday.year, myBirthday.month - 1, myBirthday.date);

       const today = new Date();
       const day1 = today.getFullYear().toString().padStart(4, '0') + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
       const day2 = birthDate.getFullYear().toString().padStart(4, '0') + (birthDate.getMonth() + 1).toString().padStart(2, '0') + birthDate.getDate().toString().padStart(2, '0');

       const age = Math.floor((Number(day1) - Number(day2)) / 10000);

       return(
           <Col className="">
               <h1><i class="fas fa-address-card "></i> Profile</h1>
                   <table class="first-table profile-table">
                      <tbody>
                        <tr>
                          <th>名前</th>
                          <td>小川 充喜 ♂</td>
                        </tr>
                        <tr>
                          <th>生年月日</th>
                          <td>1996年 2月 10日 {age}歳</td>
                        </tr>
                        <tr>
                          <th>大学</th>
                          <td>早稲田大学 創造理工学部 経営システム工学科 卒業</td>
                        </tr>
                        <tr>
                          <th>職歴</th>
                          <td>
                              <p>2018年4月〜 <br />株式会社ジールキャリア入社 <br />職種：新規事業企画</p>
                              <p>2018年9月〜 エンジニア転向</p>
                              <p>2019年1月 <br />株式会社ジールコミュニケーションズ転籍 <br />職種：エンジニア</p>
                          </td>
                        </tr>
                        <tr>
                          <th>バイト歴</th>
                          <td>
                            <p>2012年8月〜2016年3月 <br />接客サービス業</p>
                            <p>2015年12月〜2018年3月 <br />NHK国際放送局WorldNews部 TK&庶務</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="profile-table">
                      <tbody>
                          <tr>
                            <th>使用できる言語</th>
                            <td>HTML, CSS, JavaScript, (vue, react), PHP, (laravel), MySQL, Python, (git)</td>
                          </tr>
                        <tr>
                          <th>環境</th>
                          <td>Windows, Ubuntu</td>
                        </tr>
                        <tr>
                          <th>趣味</th>
                          <td>麻雀, 散歩, ゲーム, スノボー, ビリヤード</td>
                        </tr>
                        <tr>
                          <th>性格</th>
                          <td>
                            <p>楽しいことが大好き。みんなと話したい。</p>
                            <p>負けず嫌い。だからこそ競い合える人が好き。</p>
                            <p>机の上は常にきれいにしたい。</p>
                          </td>
                        </tr>
                        <tr>
                          <th>今後やりたいこと</th>
                          <td>
                            <ul>
                              <li>皆さんのLTに出てくる躓いたことを100%共感できるようになる(多方面の知識)</li>
                              <li>レスポンシブ対応の簡略ツール作成</li>
                              <li>アプリ開発(ios, android, react native)</li>
                              <li>エンジニアコミュニティの拡大サービス作成</li>
                              <li>誰かしらの当たり前(サービス)を作る</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th>GitHub</th>
                          <td><a href="https://github.com/MitsukiOgawa" class="tag">こちらになります</a></td>
                        </tr>
                      </tbody>
                    </table>
           </Col>
       );
   }
}
