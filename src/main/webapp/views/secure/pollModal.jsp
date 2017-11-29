
<!-- Modal -->
<div id="newpoll" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Lis‰‰ uusi kysely</h4>
			</div>
			<div class="modal-body">
				<input type="text" class="form-control" placeholder="Kyselyn nimi"
					id="newPollName" name="name">
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default"
					onclick="tallennaUusiKysely()">Luo</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Peruuta</button>
			</div>
		</div>

	</div>
</div>

<!-- Modal -->
<div id="editpoll" class="modal fade" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Muokkaa kysely‰</h4>
			</div>
			<div class="modal-body">
				<input type="text" class="form-control" placeholder="Kyselyn nimi"
					id="editPollName" name="name"> <br>
				<label for="published">Julkaistu: </label> <input type="checkbox"
					name="published">
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger left"
					onclick="poistaKysely()">Poista kysely</button>
					<script type="text/javascript">
					function getValue() {
						var val = $('#editPollName').val();
						console.log(val);
						muokkaaKysely(val);
					}
					</script>
				<button type="button" class="btn btn-success" id="savebutton" onclick="getValue();">Tallenna</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Peruuta</button>
			</div>
		</div>

	</div>
</div>