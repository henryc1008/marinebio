<script>
    import {page} from "$app/stores";
</script>
<div>
    hi from navbar
    <nav>
        <a href="{page}/about" > about</a>
        <a href="{page}/contact" > contact</a>
        <a href="{page}/#" > home</a>
        <a href="{page}/animals/Animal1">Animal 1 </a>
        <a href="{page}/animals/Animal2">Animal 2 </a>
        <a href="{page}/animals/Animal3">Animal 3 </a>
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