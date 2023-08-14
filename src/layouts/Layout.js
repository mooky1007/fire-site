import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
    return (
        <Wrapper>
            <aside>
                <h2>
                    <Link to="/">Home</Link>
                </h2>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Outlet />
                <footer>
                    <p>Footer</p>
                </footer>
            </main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    aside {
        width: 240px;
        padding: 10px;
        border-right: 1px solid #ddd;
    }

    main {
        flex: 1;

        display: flex;
        flex-direction: column;
        > div {
            padding: 10px;
        }
    }

    footer {
        margin-top: auto;
        padding: 10px;
    }
`;

export default Layout;