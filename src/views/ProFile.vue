<style scoped lang="scss">

</style>

<template>
  <div class="container">
    <img src="" alt="" />
    <h1>username:{{ }}</h1>
  </div>
</template>

<script setup lang="ts">
class Request {
  public static async getJSON( url: string = 'http://localhost:8080/posts/1' ) {
    let response = await fetch(url, {
      method: 'GET',
    })
    if ( response.statusText === 'OK' ) {
      let copy = await response.clone()
      console.log(copy.json())
      return await response.json()
    }
    else {
      throw new Error(response.statusText)
    }
  }

  public static async deleteJSON( url: string = 'http://localhost:8080/posts/1' ) {
    let response = await fetch(url, {
      method: 'DELETE',
    })
    if ( response.statusText === 'OK' ) {
      let copy = await response.clone()
      console.log(copy.json())
      return await response.json()
    }
    else {
      throw new Error(response.statusText)
    }
  }

  public static async postJSON( url: string = 'http://localhost:8080/posts', headers: {} = { 'Content-Type': 'application/json' }, body: {} = { 'title': 'postJSON', 'author': 'lisa' } ) {
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ ...body }),
      })
      let copy = await response.clone()
      console.log(copy.json())
      return await response.json()
    }
    catch ( err: unknown ) {
      console.error(err)
    }
  }

  public static async putJSON( url: 'http://localhost:8080/posts/1', headers: {} = { 'Content-Type': 'application/json' }, body: {} = { 'title': 'put', 'author': 'lisa' } ) {
    try {
      let response = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ ...body }),
      })
      let copy = await response.clone()
      console.log(copy.json())
      return await response.json()
    }
    catch ( err: unknown ) {
      console.error(err)
    }
  }

  public static async patchJSON( url: string = 'http://localhost:8080/posts/1',
                                 headers: {} = { 'Content-Type': 'application/json' },
                                 body: {} = { 'title': 'patchJSON', 'author': 'lisa' },
  ) {
    try {
      let response = await fetch(url, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({ ...body }),
      })
      let copy = response.clone()
      console.log(copy.json())
      return await response.json()
    }
    catch ( err: unknown ) {
      console.error(err)
    }
  }
}


//Request.getJSON()
//Request.deleteJSON()

//Request.postJSON('http://localhost:8080/posts')
//Request.putJSON('http://localhost:8080/posts/1')
Request.patchJSON(undefined,undefined,{ 'title': 'patchJSON', 'author': 'lisa' })


</script>