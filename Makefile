checkpoint:
	@git add .
	@git commit -m "checkpoint at $$(date '+%Y-%m-%dT%H:%M:%S%z')"
	@git push
	@ech Checkpoint created and pushed to remote