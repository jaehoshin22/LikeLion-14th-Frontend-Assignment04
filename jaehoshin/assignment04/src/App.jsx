import Header from './components/Header';
import RecommendCard from './components/RecommendCard';
import SectionTitle from './components/SectionTitle';

function App() {
  const movie = [
    { id: 1, title: "9월이 지나면", description: "한예종 졸업작품 단편영화. 과장된 표현 없고 잔잔하게 흘러가지만 내 마음을 요동치게 한 영화였다."},
    { id: 2, title: "The playlist", description: "스포티파이의 탄생스토리를 담은 드라마. 개발과 창업에 관련한 내용이 많이 나와서 추천한다."}
  ];
    const music = [
    { id: 1, title: "wake me up when septemberend", description: "9월이 지나면 메인 OST. <9월이 지나면> 영화를 보고 나서 좋아하게 된 음악이다."},
    { id: 2, title: "말하는대로", description: "불확실한 현실에서 20대를 보내고 있는 우리의 마음을 이 음악을 통해 위로받길 바란다."}
  ];
    const book = [
    { id: 1, title: "야밤의 공대생 만화", description: "IT관련 스토리가 많이 나와서 재밌게 봤다. 공대생이라면 익숙한 폰노이만 아저씨에 대한 이야기도 재밌게 풀어준다."},
    { id: 2, title: "슬픔을 공부하는 슬픔", description: "요즘 읽고 있는 책이다. 슬픔에 대한 공부가 필요한 이유를 알게 해준다. 슬픔을 대하는 태도를 다시 생각해보게 만든 책이었다."}
  ];

  return (
    <div>
      <Header />

      <main>
      <section style={{marginBottom: '50px'}}>
      <SectionTitle title="영화 추천" />
      <div style={{ display: 'flex',justifyContent:'center', flexwrap: 'wrap', gap: '20px'}}>
       {movie.map((item) => (
        <RecommendCard
        key={item.id}
        title={item.title}
        description={item.description}
       />
      ))}
      </div>
      </section>

      <section style={{marginBottom: '50px'}}>
      <SectionTitle title="음악 추천" />
      <div style={{ display: 'flex',justifyContent:'center', flexwrap: 'wrap', gap: '20px'}}>
      {music.map((item) => (
        <RecommendCard
        key={item.id}
        title={item.title}
        description={item.description}
       />
      ))}
      </div>
      </section>

      <section style={{marginBottom: '50px'}}>
      <SectionTitle title="책 추천" />
      <div style={{ display: 'flex',justifyContent:'center', flexwrap: 'wrap', gap: '20px'}}>
      {book.map((item) => (
        <RecommendCard
        key={item.id}
        title={item.title}
        description={item.description}
       />
      ))}
      </div>
      </section>


      </main>
    </div>
  );
}

export default App;
