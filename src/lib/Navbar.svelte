<script>
    import {page} from "$app/stores";
</script>
<div>
    hi from navbar
    <nav>
        <a href="/about" class:active={$page.url.pathname == "/about"}> about</a>
        <a href="/contact" class:active={$page.url.pathname == "/contact"}> contact</a>
        <a href="/#" class:active={$page.url.pathname == "/"}> home</a>
    </nav>
</div>
<style lang="scss">
    div{
        background: var(--color--primary);
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a{
        text-decoration: none;
        color: white;
        padding: 30px;

        &.active {
            color: var(--color--secondary)
        }
    }
</style>