<map version="freeplane 1.8.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="meu-candidato" FOLDED="false" ID="ID_646630364" CREATED="1625579590116" MODIFIED="1625579598730" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties fit_to_viewport="false" edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="1" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Requisitos" POSITION="right" ID="ID_184645031" CREATED="1625579600210" MODIFIED="1625579605634">
<edge COLOR="#ff0000"/>
<node TEXT="RF1. Cadastro de Usuário" ID="ID_1451494442" CREATED="1625579606812" MODIFIED="1625579671339">
<node TEXT="Quem?" ID="ID_577739974" CREATED="1625579672497" MODIFIED="1625579680761">
<node TEXT="Usuário" ID="ID_1513485475" CREATED="1625579709552" MODIFIED="1625579716305"/>
</node>
<node TEXT="O que?" ID="ID_94907453" CREATED="1625579682938" MODIFIED="1625579687409">
<node TEXT="Realiza o cadastro no aplicativo" ID="ID_1663597553" CREATED="1625579717977" MODIFIED="1625579726980"/>
</node>
<node TEXT="Por que?" ID="ID_1138390395" CREATED="1625579689097" MODIFIED="1625579693865">
<node TEXT="Para obter acesso ao sistema" ID="ID_1886899325" CREATED="1625579732936" MODIFIED="1625579755265"/>
</node>
<node TEXT="Cenários" ID="ID_140007146" CREATED="1625579696625" MODIFIED="1625579704227">
<node TEXT="1.1 Usuário não cadastrado baixa o aplicativo pela primeira vez" ID="ID_707075996" CREATED="1625579757089" MODIFIED="1625579799961">
<node TEXT="Dado que o usuário não possui cadastro no aplicativo" ID="ID_1904203323" CREATED="1625579807985" MODIFIED="1625579823395"/>
<node TEXT="Quando o usuário abrir o aplicativo e clicar no botão de cadastro" ID="ID_852917951" CREATED="1625579824688" MODIFIED="1625610312931"/>
<node TEXT="Então o aplicativo abre o formulário para ele realizar o cadastro" ID="ID_1623120406" CREATED="1625579865689" MODIFIED="1625579888371"/>
</node>
</node>
</node>
<node TEXT="RF2. Login de usuário com mídias sociais" ID="ID_283827842" CREATED="1625579930610" MODIFIED="1625580087049">
<node TEXT="Quem?" ID="ID_1181160997" CREATED="1625580088313" MODIFIED="1625580092193">
<node TEXT="Usuário" ID="ID_604489256" CREATED="1625580108361" MODIFIED="1625580110905"/>
</node>
<node TEXT="O que?" ID="ID_857170917" CREATED="1625580093448" MODIFIED="1625580095921">
<node TEXT="Realiza o cadastro no aplicativo com alguma mídia social que o mesmo possua como: Instagram/Facebook/Twitter/Google account" ID="ID_1397773947" CREATED="1625580112785" MODIFIED="1625580152845"/>
</node>
<node TEXT="Por que?" ID="ID_949715390" CREATED="1625580097408" MODIFIED="1625580100025">
<node TEXT="Para obter acesso ao sistema de maneira mais simplificada, sem precisar preencher o formulário de cadastro." ID="ID_237885587" CREATED="1625580154849" MODIFIED="1625580186282"/>
</node>
<node TEXT="Cenários" ID="ID_71542457" CREATED="1625580101977" MODIFIED="1625580106137">
<node TEXT="2.1 Usuário não cadastrado baixa o aplicativo, porém não quer se cadastrar atrés do formulário de cadastro fornecido pelo aplicativo" ID="ID_461068767" CREATED="1625580187689" MODIFIED="1625580230574">
<node TEXT="Dado que o usuário não possui o cadastro no aplicato e possui alguma mídia social que o aplicativo aceite como forma de login alternativo." ID="ID_1390072102" CREATED="1625580231721" MODIFIED="1625580267611"/>
<node TEXT="Quanto o usuário abrir o aplicativo e clicar no botão de logar com alguma mídia social." ID="ID_604703363" CREATED="1625580269657" MODIFIED="1625580291882"/>
<node TEXT="Então o aplicativo irá requisitar o acesso as informações da mídia social através da API fornecida pela mesma." ID="ID_1034973254" CREATED="1625580293412" MODIFIED="1625580328673"/>
</node>
</node>
</node>
<node TEXT="RF3. Consultar os deputados que possuem mandato vigente" ID="ID_1749863586" CREATED="1625580332920" MODIFIED="1625580362065">
<node TEXT="Quem?" ID="ID_395815267" CREATED="1625580363040" MODIFIED="1625580366169">
<node TEXT="Usuario" ID="ID_354609056" CREATED="1625580388976" MODIFIED="1625580394676"/>
</node>
<node TEXT="O que?" ID="ID_1946959446" CREATED="1625580367945" MODIFIED="1625580370385">
<node TEXT="Com o usuário logado no sistema, ele poderá consultar os candidatos que possuem mandatos em vigor na camara dos deputados federais." ID="ID_1215721861" CREATED="1625580404544" MODIFIED="1625580461326"/>
</node>
<node TEXT="Por que?" ID="ID_736987465" CREATED="1625580371977" MODIFIED="1625580378185">
<node TEXT="Para obter as informações de algum deputado em especifico" ID="ID_1699812820" CREATED="1625580463104" MODIFIED="1625580481505"/>
</node>
<node TEXT="Cenários" ID="ID_731657759" CREATED="1625580379320" MODIFIED="1625580387113">
<node TEXT="3.1 Usuário autenticado no sistema, deseja realizar uma consulta sobre um deputado especifico ou não. Para obter as informações que aplicativo retorna." ID="ID_230322884" CREATED="1625580483912" MODIFIED="1625580544305">
<node TEXT="Dado que o usuário esteja logado e deseje realizar alguma consulta sobre os deputados que compõem a camara no momento da consulta." ID="ID_1403048278" CREATED="1625580545184" MODIFIED="1625580608627"/>
<node TEXT="Quando o usuário ir até a aba de pesquisar o usuário e informar os filtros que ele deseja aplicar na pesquisa" ID="ID_230500246" CREATED="1625580610041" MODIFIED="1625580650530"/>
<node TEXT="Então o aplicatico retornará uma lista que contem todos os resultados que batem com o filtro informado pelo usuário." ID="ID_1535118255" CREATED="1625580651872" MODIFIED="1625580680965"/>
</node>
</node>
</node>
<node TEXT="RF4. Favoritar um ou mais deputados federais" ID="ID_1098182962" CREATED="1625608263418" MODIFIED="1625609061635">
<node TEXT="Quem?" ID="ID_184807790" CREATED="1625609063951" MODIFIED="1625609069625">
<node TEXT="Usuário" ID="ID_1651043026" CREATED="1625609070471" MODIFIED="1625609073546"/>
</node>
<node TEXT="O que?" ID="ID_726099880" CREATED="1625609084487" MODIFIED="1625609086715">
<node TEXT="Com o resultado de uma consulta no aplicativo o usuário pode marcar um deputado como favorito." ID="ID_641343434" CREATED="1625609088352" MODIFIED="1625611732577"/>
</node>
<node TEXT="Por que?" ID="ID_503120570" CREATED="1625611734773" MODIFIED="1625611741151">
<node TEXT="Para facilitar o acesso aos deputados que o usuário tem interesse de acompanhar" ID="ID_534044720" CREATED="1625611742131" MODIFIED="1625611775539"/>
</node>
<node TEXT="Cenários" ID="ID_1239521345" CREATED="1625611777621" MODIFIED="1625611782658">
<node TEXT="4.1 Usuário realiza uma consulta ao aplicativo, e ele retorna os deputados(as) que se enquadrem nos parametros informados" ID="ID_1164476280" CREATED="1625611783944" MODIFIED="1625611866258">
<node TEXT="Dado que o usuário esteja logado, tenha realizado uma consulta." ID="ID_1286823916" CREATED="1625611867731" MODIFIED="1625611977826"/>
<node TEXT="Quando o usuário selecionar um deputado(a) que tenha sido retornado na consulta" ID="ID_1640596086" CREATED="1625611979195" MODIFIED="1625612030074"/>
<node TEXT="Então o aplicativo irá exibir o perfil do deputado com uma opção de favoritar o mesmo." ID="ID_1259951814" CREATED="1625612032143" MODIFIED="1625612066072"/>
</node>
</node>
</node>
<node TEXT="RF5. Consultar os gastos mensais de um deputado" ID="ID_1214490043" CREATED="1625612071003" MODIFIED="1625612092318">
<node TEXT="Quem?" ID="ID_233939363" CREATED="1625612093607" MODIFIED="1625612097065">
<node TEXT="Usuário" ID="ID_124002532" CREATED="1625612098353" MODIFIED="1625612100174"/>
</node>
<node TEXT="O que?" ID="ID_247639624" CREATED="1625612104772" MODIFIED="1625612108098">
<node TEXT="Com o perfil aberto de um deputado, o usuário poderá consultar os gastos mensais daquele deputado." ID="ID_512742187" CREATED="1625612108938" MODIFIED="1625612161053"/>
</node>
<node TEXT="Por que?" ID="ID_508742222" CREATED="1625612166096" MODIFIED="1625612169327">
<node TEXT="Para poder acompanhar mais de perto a rotina de gastos de seu deputado(a) eleito/de interesse." ID="ID_1734599706" CREATED="1625612170531" MODIFIED="1625612265850"/>
</node>
<node TEXT="Cenários" ID="ID_10566841" CREATED="1625612224678" MODIFIED="1625612232634">
<node TEXT="5.1 Usuário selecionou um perfil de um deputado(a), e nele serão exibidos o resumo dos gastos que aquele deputado(a) teve durante o mês." ID="ID_315392815" CREATED="1625612233421" MODIFIED="1625612303391">
<node TEXT="Dado que o usuário tenha selecionado um deputado(a) através dos favoritos ou uma consulta." ID="ID_1101446582" CREATED="1625612305411" MODIFIED="1625612364762"/>
<node TEXT="Quando o usuário selecionar o perfil de um deputado(a)" ID="ID_1811888499" CREATED="1625612341988" MODIFIED="1625612359661"/>
<node TEXT="Então o aplicativo irá exibir em uma sessão da tela o resumo dos gastos mensais do deputado(a) selecionado." ID="ID_1366758561" CREATED="1625612379828" MODIFIED="1625612414385"/>
</node>
</node>
</node>
</node>
</node>
</map>
