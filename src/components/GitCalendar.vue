<!-- WARNING: DEPRECATED COMPONENT -->

<style lang="scss">
.js-calendar-graph,
.contrib-footer {
  margin: 0 !important;
  padding: 0;
}
.js-calendar-graph {
  width: 100%;
  min-width: 700px;
  float: right;
}
.graph-before-activity-overview {
  overflow: scroll;
  padding-top: 0 !important;
}
.contrib-legend {
  li[style*="#ebedf0"] { background-color: var(--color-gray-200) !important; }
  li[style*="#9be9a8"] { background-color: var(--color-blue-200) !important; }
  li[style*="#40c463"] { background-color: var(--color-blue-400) !important; }
  li[style*="#30a14e"] { background-color: var(--color-blue-600) !important; }
  li[style*="#216e39"] { background-color: var(--color-blue-800) !important; }
}
.calendar-graph text.wday,
.calendar-graph text.month {
  fill: var(--color-gray-500);
}
.text-gray,
.text-muted {
  color: var(--color-gray-600);
}
#git-calendar .text-gray,
#git-calendar .text-muted {
  font-size: var(--fluid--2);
}
.contrib-number {
  color: var(--color-gray-800) !important;
  font-size: var(--fluid-2);
}
.contrib-column {
  display: none !important;
}
</style>

<template>
<div>
  <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"/>
  <div id="git-calendar">
    <p style="text-align: center;">Loading GitHub Contribution Data</p>
  </div>
</div>
</template>

<script>
// NOTE this component requires "github-calendar": "^2.2.6" as a dependency
// This package has been removed from this project and will need to be readded
export default {
  mounted() {
    window.GitHubCalendar = require('github-calendar')
    GitHubCalendar("#git-calendar", "mattmcadams", { responsive: true }).then(() => changeCalendarColors())

    function changeCalendarColors() {
      let days = document.getElementsByClassName("day")

      for (let i = 0; i < days.length; i++) {
        let day = days[i]
        let count = day.getAttribute("data-count")

        if (count == 0) {
          day.setAttribute("fill", "var(--color-gray-200)")
        } else if (count < 10) {
          day.setAttribute("fill", "var(--color-blue-300)")
        } else if (count < 20) {
          day.setAttribute("fill", "var(--color-blue-400)")
        } else if (count < 30) {
          day.setAttribute("fill", "var(--color-blue-500)")
        } else if (count > 30) {
          day.setAttribute("fill", "var(--color-blue-600)")
        }
      }
    }
  }
}
</script>
