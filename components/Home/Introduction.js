import Animation from "./animation";

export default function Introduction() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
                    끊임 없이 도전하여 성장하는 개발자
                    <br className="hidden lg:inline-block" />김민성 입니다
                </h1>
                <p className="mb-8 leading-relaxed">
                    많이 인생에 내려온 스며들어 동산에는 우리의 굳세게 우는 아니다. 웅대한 무엇을 심장은 가지에 장식하는 싶이 보배를 약동하다. 얼음과 품으며, 그들에게 따뜻한 얼마나 방지하는 얼음이 착목한는 쓸쓸하랴? 인류의 같은 곳으로 대고, 싶이 내려온 그들은 이상 것이다. 불어 이상, 이상의 피다. 자신과 보이는 그것은 구하기 투명하되 것이 귀는 힘차게 위하여서. 인생을 군영과 기관과 그들을 그들은 있는가? 그들에게 찾아 오아이스도 청춘을 그러므로 반짝이는 지혜는 힘차게 사막이다. 곳이 트고, 생생하며, 보내는 사랑의 우는 그러므로 이것이다. 몸이 뼈 스며들어 굳세게 붙잡아 불어 듣는다. 주는 생명을 품었기 이 맺어, 위하여, 그들은 가지에 것이다.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Project View
                    </button>
                </div>
            </div>
        </>
    );
}