title = ('este é o meu primeiro codigo em python neste computado: JN001\n\nproposito:minha namorada me deixar jogar algo')
print('{}\n'.format(title.upper()))

def permicao():
	per = 'não'

	while (per == 'não') or (per == 'nao') or (per == 'NAO')or (per == 'NÃO') or (per == 'Nao') or (per == 'Não'):
		per = input('amor posso jogar?\nSim ou Não:')

		while not ((per == 'sim') or (per == 'não') or (per == 'nao') or (per == 'SIM') or (per == 'NAO')or (per == 'NÃO') or (per == 'Sim') or (per == 'Nao') or (per == 'Não')):
			per = input('amor, é para responder com sim ou não.\nposso jogar?')

	print('obrigado amor. estou indo jogar')


permicao()
