
function selectTier(tier) {
  alert("You selected " + tier + " Tier!");
  
  // Tindakan staking atau auto-fill berdasarkan pilihan tier
  if (tier === "Bronze") {
    document.getElementById("stakeAmount").value = 10;  // Contoh: Stake 10 GPROOF untuk Bronze
  } else if (tier === "Silver") {
    document.getElementById("stakeAmount").value = 200; // Contoh: Stake 200 GPROOF untuk Silver
  } else if (tier === "Gold") {
    document.getElementById("stakeAmount").value = 600; // Contoh: Stake 600 GPROOF untuk Gold
  } else if (tier === "Quantum") {
    document.getElementById("stakeAmount").value = 1200; // Contoh: Stake 1200 GPROOF untuk Quantum
  }
}
