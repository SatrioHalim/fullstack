async function fetchData() {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      return data; // Mengembalikan data
    } catch (error) {
      console.error('Error:', error);
      return null; // Kalau error, return null atau bisa yang lain
    }
  }
  
  (async () => {
    const myData = await fetchData(); // Simpan hasil fetch ke variabel
    console.log("Here is some fact about cat : " + myData.fact);
  })();
  