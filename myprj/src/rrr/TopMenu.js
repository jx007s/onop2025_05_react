import {Link} from 'react-router-dom';

function TopMenu(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                    <Link to="/pro">제품</Link>
                </li>
                <li>
                    <Link to="/mem/aaa">멤버/aaa</Link>
                    <Link to="/mem/bbb">멤버/bbb</Link>
                    <Link to="/mem/123">멤버/123</Link>
                    <Link to="/mem/나는무너">멤버/나는무너</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                    <Link to="/About?pid=aaa&age=27&marriage=true">About2</Link>
                    <Link to="/About?pid=bbb&age=38#qwer">About3</Link>
                    <Link to="/About?age=27#asdf">About4</Link>
                </li>
                <li>
                    <Link to="/Gallery">갤러리</Link>
                    {/* Gallery의 하위로 접근 x
                    <Link to="/s1/poiu">s1</Link>  */}
                    <Link to="/Gallery/s1/hjkl">갤러리/s1</Link>
                    <Link to="/Gallery/simg">갤러리/simg</Link>
                </li>

                <li>
                    <Link to="/sr1">서브1</Link>
                    <Link to="/sr2">서브2</Link>
                    <Link to="/sr3">서브3</Link>
                </li>
                <li>
                    <Link to="/Notice">공지사항</Link>
                    <Link to="/Noticeasdf">공지사항asdf</Link>
                    <Link to="/Notice/zzxx">공지사항/zzxx</Link>
                    <Link to="/Notice/Detail">공지사항/상세보기</Link>
                </li>
            </ul>
        </div>
    );
}

export default TopMenu;