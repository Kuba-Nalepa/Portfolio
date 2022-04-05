<template>
    <div>
        <title>{{title}}</title>
        <img :src="require(`@/assets/${image}`)">
        <div>
            <p>
                {{description}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        title: String,
        description: String,
        image: String
    }
}
</script>