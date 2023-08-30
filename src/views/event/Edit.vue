<template>
  <p>Editing coming soon</p>
</template>

<script>
export default {
  data: () => {
    return {
      unsavedChanges: true,
    }
  },
  props: ['event'],
  beforeRouteLeave(routeTo, routeFrom) {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false
      }
    }
  },
}
</script>

