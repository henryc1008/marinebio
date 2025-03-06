<script>
    import {base} from "$app/paths";
</script>
<div>
    hi from navbar
    <nav>
        <a href="{base}/about" > about</a>
        <a href="{base}/contact" > contact</a>
        <a href="{base}/#" > home</a>
        <a href="{base}/animals"> animals</a>
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