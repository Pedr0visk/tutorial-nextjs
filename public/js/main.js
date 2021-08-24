(function() {
  function _getEl(id) {
    return document.getElementById(id)
  }

  window.addEventListener('load', function() {
    const sidebar = _getEl('sidebar')
    const wrapper = _getEl('wrapper')
    const toggleBtn = _getEl('sidebarToggleBtn')

    toggleBtn.addEventListener('click', function() {
      sidebar.classList.toggle('display')
      wrapper.classList.toggle('shrink')
    })
  })
})();