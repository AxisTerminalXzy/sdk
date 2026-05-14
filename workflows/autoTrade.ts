export async function executeTrade(token: string) {
  console.log(`Executing trade for ${token}`);

  return {
    success: true,
    token
  };
}
