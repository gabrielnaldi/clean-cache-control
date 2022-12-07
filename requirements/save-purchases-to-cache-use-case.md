# Gravar compras no Cache

> ## Case de sucesso

1. ✅ Sistema executa o comando "Salvar Compras"
2. Sistema cria uma data para ser armazenada no Cache
3. ✅ Sistema apaga os dados do cache atual.
4. ✅ Sistema grava os novos dados no Cache.
5. Sistema não retorna nenhum erro.

> ## Exceção - Erro ao apagar dados no Cache
1. ✅ Sistema não grava novos dados no Cache.
2. ✅ Sistema retorna erro.

> ## Exceção - Erro ao gravar dados no Cache
1. ✅ Sistema retorna erro